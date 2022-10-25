import { useAppSelector } from "../../hooks/state";

export function User() {
  const user = useAppSelector((state) => state.user);

  return <div>Usuário: {user.name}</div>;
}
