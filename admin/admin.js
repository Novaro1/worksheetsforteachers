exports.handler = async (event) => {
  const key = event.queryStringParameters.key;

  if (key === process.env.ADMIN_SECRET) {
    return {
      statusCode: 302,
      headers: {
        Location: "http://YOUR_SERVER_IP"
      }
    };
  }

  return {
    statusCode: 404,
    body: "Not found"
  };
};
