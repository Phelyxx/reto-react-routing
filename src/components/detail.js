import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");

export default function Detail() {
    const [mascota, setMascota] = useState({});
    const mascotaId = useParams().mascotaId;

    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
                setMascota(data.find((mascota) => mascota.id === parseInt(mascotaId)));
            });
    }, [mascotaId]);

    return (
        <div>
            <h1>{mascota.nombre}</h1>
            <Image src={mascota.foto} fluid />
            <p>{mascota.raza}</p>
        </div>
    );
}