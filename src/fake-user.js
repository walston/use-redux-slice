import faker from "faker";
export default function fakeUser() {
  return {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    uid: faker.random.uuid()
  };
}
