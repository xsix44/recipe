import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Menu } from "primereact/menu";
import { Panel } from "primereact/panel";
import { Timeline } from "primereact/timeline";
import { useRef } from "react";

export function AboutUs() {
    const events = [
        { status: 'planirovanie', date: '15/10/2020 10:30',text: "idea, design,function planning." },
        { status: 'razrabotka', date: '15/10/2020 14:00', text:"database,creating API, frontend integration" },
        { status: 'Shipped', date: '15/10/2020 16:15', text: "user feedback, site improvement"},
    ];

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
            </Card>
        );
    };


    const headerTemplate = (options) => {

        return (
            <div>
                <div className="flex align-items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
                    <span className="font-bold">Amy Elsner</span>
                </div>
            </div>
        );
    };

    const footerTemplate = (options) => {

        return (
            <div>
                <span className="p-text-secondary">Updated 2 hours ago</span>
            </div>
        );
    };


    return (
        <>
         <div className="card flex flex-wrap gap-6">
            <Timeline value={events} content={customizedContent} className="w-full md:w-20rem" />
            </div>
        <Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate} toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
        </>
    )
        }

