interface CreateUser {
  login: string;
  password: string;
  name: string;
  email: string;
}

export const CreateUserDTO = (payload: unknown): CreateUser => {
  if (typeof payload !== 'object' || payload === null) {
    throw new Error('Usuário deve ser um objeto válido');
  }

  const { email, login, name, password } = payload as CreateUser;

  const schema = { email, login, name, password };

  Object.entries(schema).forEach(([key, value]) => {
    if (!(typeof value == 'string') || value.length === 0) {
      throw new Error(`A propriedade '${key}' não é válido.`, { cause: key });
    }
  });

  return schema;
};
