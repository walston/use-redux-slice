import faker from "faker";

export default function fakeFileset() {
  function fakeFile() {
    return {
      name: faker.system.commonFileName(faker.system.commonFileExt()),
      path: faker.system.filePath(),
      modified: faker.date.recent()
    };
  }

  return Array(10)
    .fill({})
    .map(fakeFile);
}
