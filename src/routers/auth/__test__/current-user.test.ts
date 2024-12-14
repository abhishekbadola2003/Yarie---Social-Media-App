import request from "supertest";
import { app } from "../../../app";
// import { cookie } from "express-validator";

it("should return a currentUser property", async () => {
  const cookie = await global.signin();

  const res = await request(app)
    .get("/current-user")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(res.body.currentUser.email).toEqual("email@email.com");
});
