(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: string;
    zip: number;
    city: string;
    country: string;
  }

  const client: Client = {
    name: "Jesus",
    age: 37,
    address: {
      id: "125axz",
      zip: 28000,
      city: "Madrid",
      country: "Spain",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Patricia",
    age: 35,
    address: {
      id: "521zxa",
      zip: 28000,
      city: "Madrid",
      country: "Spain",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
  //console.log(client,client2);
})();
