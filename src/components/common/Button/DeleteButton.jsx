import Icon from "../../../assets/Icons/Icons";
import { Button } from "./Button";

export function DeleteButton( { ...rest } ){
  return (
    <Button type='outlined' w={40} h={40} {...rest}  icon={true}>
      <Icon name="deleteIcon" alt="delete Button" size = '20px'/>
    </Button>
  )
}
