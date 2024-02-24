import {TabMenu} from 'primereact/tabmenu'
import {Button} from 'primereact/button'

import { Outlet } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';


export function Layout() {
    const MainButtonOnClick = () => {
        alert("вы успешно нажали на кнопку")
    };
    
    const MainButton = <Button label="Primary" onClick={MainButtonOnClick} raised/>;

    const items = [
        {label: 'Home', url: '/home'},
        {label: 'About', url: '/about'},
        {label: 'Favorites', url: '/favorites'},
        {template: MainButton}

    ]

    return (
        <>
        <TabMenu model={items}/>
        <div id="main">
        <Outlet/>
        {subscribed && <confirm/>}
        </div>
        <footer>
            <div style={{display: "flex", justifyContent: "space-between", padding: "1rem" }}>
                    <h5>MAde by jevgeni wdfjadf</h5>
                    <div className="p-inputgroup" style={{width: "auto"}}>
                        <InputText placeholder="Keyword" />
                        <Button icon="pi pi-search" className="p-button-warning" />
                    </div>
            </div>
        </footer>
        </>
    )
}
