

export function Confirmable(message) {
  return ( target: object, key: string|symbol, descriptor: PropertyDescriptor  ) => {
    const original =  descriptor.value;

    // tslint:disable-next-line: only-arrow-functions
    descriptor.value = function( ...args: any[] ) {
      const allow = confirm(message);
      if (allow) {
        return original.apply(this);
      } else {
        return null;
      }
    };
  };
}
