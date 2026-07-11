import Card from "@/components/shared/Card";
import { ElementType } from "react";

type ServicesProps = {
    icon: ElementType;
    title: string;
    body: string;
}

const ServicesCard = ({icon: Icon, title, body} : ServicesProps) => {
    return (
        <Card className="mt-8 flex flex-col gap-2 items-start p-4">
        <div className="p-4 bg-primary rounded-md">
            {Icon && <Icon className="text-2xl text-white" />}
        </div>
        <div>
            {title && <h2 className="text-primary font-bold md:text-2xl text-lg tracking-wide">{title}</h2>}
            {body && <p className="text-gray-500 tracking-wide md:text-lg text-sm">{body}</p>}
        </div>
      </Card>
    )
}

export default ServicesCard;