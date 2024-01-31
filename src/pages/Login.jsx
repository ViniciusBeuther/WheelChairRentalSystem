import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function authUser(user, password) {
if (user === "admin" && password === "Password123!") {
    return true; 
} else {
    return false;
}
}

const Login = () => {
const [user, setUser] = useState("");
const [password, setPassword] = useState("");
const [loginError, setLoginError] = useState(false); 
const navigate = useNavigate();

const handleSubmit = (ev) => {
    ev.preventDefault();
    const isAuthenticated = authUser(user, password);

    if (isAuthenticated) {
        setLoginError(false); 
        navigate("/home");

    } else {
        setLoginError(true); 
        alert("Usuário ou Senha Inválido, tente novamente!");
    }
};

return (
    <>
    <div className="login bg-white px-10 py-2 mt-5 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
        <Typography variant="h2" className="mb-3 text-center">Entrar</Typography>

        <div className="inputs">
            <Input
            color="blue"
            label="Usuario"
            value={user}
            onChange={(ev) => setUser(ev.target.value)}
            error={loginError}
            className="text-xl"
            />
            <br />
            <Input
            color="blue"
            type="password"
            label="Senha"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            error={loginError} 
            className="text-xl"
            />
        </div>
        <div className="flex items-center justify-center">
                <Button color="blue" type="submit" className="mt-3 mb-5">
                    Entrar
                </Button>
        </div>
        </form>
    </div>
    </>
);
};

export default Login;
