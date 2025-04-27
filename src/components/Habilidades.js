const Habilidades = ({habilidades}) => (
    <section>
        <ul>
            {habilidades.map((habilidade, index) => (
                <li key={index}>{habilidade}</li>
            ))}
        </ul>
    </section>
);

export default Habilidades;