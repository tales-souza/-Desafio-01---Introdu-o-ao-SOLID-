import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userLogged = this.usersRepository.findById(user_id);

    if (!userLogged) {
      throw new Error("User not exists");
    }

    if (!userLogged.admin) {
      throw new Error("User Logged In Not Administrator");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
