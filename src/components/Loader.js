import { TailSpin } from "react-loader-spinner";
export default function Loader() {
    return <>
    <div  id="loader-icon-wrapper">
        <TailSpin 
        color="#00BFFF" 
        height={200} width={200}
    />
   </div>
</>}