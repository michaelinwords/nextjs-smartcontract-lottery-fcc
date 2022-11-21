// this simpler header will be built using web3uikit
// make sure to yarn add web3uikit
import {ConnectButton} from "web3uikit"

export default function SimpleHeader() {
    return (
        <div>
            Decentralised Raffle
            {/* this connect button does everything our other button does, and more! */}
            <ConnectButton moralisAuth={false}/>
        </div>
    )
}