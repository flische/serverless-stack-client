export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "federicos-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://db3g9zex6c.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_vsjrcDRXK",
    APP_CLIENT_ID: "6e2e4uggg8fjsk7lqctklm9opi",
    IDENTITY_POOL_ID: "us-west-2:9d3b6265-48a5-4d3e-badd-b3b70b87c710"
  },
  STRIPE_KEY: "pk_test_MjAxVq7zCOnLKBEP5AXUs4VY00tPvWvjLT",
};