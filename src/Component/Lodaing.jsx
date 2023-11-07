import { Dna } from 'react-loader-spinner'


function Lodaing() {
    return (
        <div>
            <Dna
                visible={true}
                height="250"
                width=""
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default Lodaing