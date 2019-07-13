import * as React from "react";
import { StyledTextArea } from "../styled/Modal";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";

export default function Description(props: any) {
  const [user] = useContext(userContext);
  const { fullscreen, value, setValue, setUpdate } = props
  
  return (
    <StyledTextArea
    disabled={fullscreen || !user}
    value={value}
    onChange={e => {
      setValue(e.target.value)
      setUpdate(true)
    }}
  />
  );
};