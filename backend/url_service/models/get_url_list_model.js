const url_schema = require('../db_schema/url_schema');
const redis_client = require('../config/redis_config');

const get_url_list_model = async ({ user_id, offset = 0, limit = 10 }) => {
  try {
    const url_data = [];

    const url_list = await url_schema.findAll({
      where: { user_id },
      limit: Number(limit),
      offset: Number(offset)
    });

    for (const element of url_list) {
      const redis_url_key = `url:count:${element.short_code}`;

      let url_visit_cnt = await redis_client.get(redis_url_key);
      if (url_visit_cnt === null) url_visit_cnt = 0;

      url_data.push({
        url_id: element.url_id,
        short_code: element.short_code,
        url: element.url,
        updated: element.updatedAt,
        visited_count: Number(url_visit_cnt)
      });
    }
    
    return { status_code: 200, data: url_data };

  } catch (err) {
    throw err;
  }
};

module.exports = get_url_list_model;
