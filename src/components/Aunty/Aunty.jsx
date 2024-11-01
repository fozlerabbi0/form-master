import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Rabbi'}></Cousin>
                <Cousin name={'Prity'}></Cousin>

            </section>
        </div>
    );
};

export default Aunty;