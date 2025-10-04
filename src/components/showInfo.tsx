interface Props {
    address: string | null
    balance: string | null
}

export const ShowInfo = ({ address, balance} : Props) => {

    return (
        <div>
            <p>Dirección de Wallet : { address } - ${ balance } ETH</p>
        </div>
    )
}
