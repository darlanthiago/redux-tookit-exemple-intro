import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/state";
import { changeUser } from "../../store/userSlice";

export function Login() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    dispatch(changeUser(name));
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
