export const handler = (
    event: any,
    context: any,
    callback: (err: any, data: any) => void,
  ) => {
    console.log(new String(event));
    callback(null, 'hello world');
}