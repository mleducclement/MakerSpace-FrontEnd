
interface ICategory {
  id: string;
  slug: string;
  name: string;
  heat: number;
}

export class Category implements ICategory {
  id = "";
  slug = "";
  name = "";
  heat = 0;

  constructor(data: Partial<ICategory>) {
    Object.assign(this, data)
  }

  static empty() {
    return new Category({
      id: "",
      slug: "",
      name: "",
      heat: 0,
    })
  }
}