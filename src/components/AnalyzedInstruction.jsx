import { Badge } from "primereact/badge"

export function AnalyzedInstructions(props) {
    function makeStep(step) {
        return (            
            <div>
                   <Badge value={step.number}/>
               {step.step}
               <hr />
               </div>
            )
        }
    return props?.length > 0 && props[0].steps.map((step) =>makeStep(step))
}
    
            
