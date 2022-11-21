// enabling web3
import {useMoralis} from "react-moralis"
// prev refreshing the page would not auto detect if we were connected; 
// we'll use this hook to know upon loading the page, and update the page correctly
import {useEffect} from "react"

// create a function called Header (or whichever name we want for the component)
// make it export default in order to be usable by other files
export default function Header() {
    // enabling web3; use the react hook (way to keep track of state)
    // in order to use moralis, entire application needs to wrap around a moralis provider (add to _app.js)
    // we'll import account so we can see if there are any accounts
    // isWeb3EnableLoading checks to see if our metamask/wallet is popping up
    const {enableWeb3, deactivateWeb3, account, isWeb3Enabled, Moralis, isWeb3EnableLoading} = useMoralis()

    // function useEffect: parameters (function, optional: dependency array)
    // if we don't supply a dependency array, it will rerender anytime state changes(?) - dangerous if we have
    // rerenders causing rerenders cyclically
    // if we supply it with a blank dependency array, it will run once on load
    // useEffect will run once on load, but might display as twice (due to react strict mode)
    // it will keep checking valeus in dependency array; *upon any change*, will call function and rerender page
    // this useEffect will be for checking if we've connected
    useEffect(() => {
        // how do we track local state/remember what was previously set? 
        // > add a variable (dictionary pair) in our button's onclick that we can check upon load
        // if we're already connected to web3, don't need to do anything
        if (isWeb3Enabled) return
        if (typeof window !==  "undefined") {
            // if there is a defined pair under "connected" in our local storage,
            if (window.localStorage.getItem("connected")) {
                // enable web3; now, we don't have to press the connect button anymore if we already have,
                // because the browser will check for this variable and update the screen propertly if it's set
                enableWeb3()
            }
        }

        console.log(">> web3enabled changed")
        console.log(isWeb3Enabled)
    }, [isWeb3Enabled])

    // this useEffect checks if our wallet is disconnected
    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            // if there's no account, we can assume the wallet has disconnected
            if (account == null) {
                // remove the locally stored key-value pair
                window.localStorage.removeItem("connected")
                // and deactivate web3; this sets web3enabled to false
                deactivateWeb3()
                console.log(">> null account found")
            }
        })
    }, [])

    // this function returns some html
    return(<div>
        Decentralised Raffle
        {/* check if there is an account */}
        {account 
            /* IF YES ACCOUNT: just show info that we're connected 
            and use slice to make the address easier to look at */
            ? (<div>* CONNECTED to {account.slice(0,6)}...{account.slice(account.length - 4)} *</div>) 
            /* IF NO ACCOUNT: create a button - since this is a jsx file, we can place JS in many places by using {} 
            and this is enough for our wallet pop-up to appear, when we click connect */
            : (
            <button onClick={async () => {
                await enableWeb3()
                // if there is a provider/wallet, store in the browser that this button was clicked
                if (typeof window !== "undefined") {
                    window.localStorage.setItem("connected", "injected")
                }
            // disable the button if web3 is loading / the wallet has made a pop-up
            }} disabled ={isWeb3EnableLoading}>
                CONNECT</button>
            )
        }
        </div>)
}

// the hard way

// the easier way