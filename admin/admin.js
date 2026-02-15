exports.handler = async (event) => {
  const key = event.queryStringParameters.key;

  if (key === process.env.ADMIN_SECRET) {
    return {
      statusCode: 302,
      headers: {
        Location: "http://15.204.230.53"
      }
    };
  }

  return {
    statusCode: 404,
    body: "Not found"
  };
};
