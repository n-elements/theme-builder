import React from "react";
import { ButtonsGroupButton, ButtonsGroup } from "@components/ButtonsGroup";
import { Keyword, transcodeValueToKeyword } from "../helpers/keywords";
import { VariableValue } from "@store/theming/types";
import { Option } from "tiinvo";

export interface IKeywordsProps {
  value?: VariableValue;
  onSelect?: (keyword: Keyword) => any;
}

function isSelected(value: VariableValue, keyword: Keyword): boolean {
  return transcodeValueToKeyword(value) === keyword;
}

export default function Keywords(props: IKeywordsProps) {
  const createClickHandler = (keyword: Keyword) => {
    return Option(props.onSelect).mapOrElse(
      () => () => void 0,
      (fn) => () => fn(keyword)
    );
  };

  return (
    <ButtonsGroup>
      <ButtonsGroupButton
        checked={isSelected(props.value, Keyword.REV)}
        onClick={createClickHandler(Keyword.REV)}
        text={Keyword.REV}
      />
      <ButtonsGroupButton
        checked={isSelected(props.value, Keyword.UNS)}
        onClick={createClickHandler(Keyword.UNS)}
        text={Keyword.UNS}
      />
      <ButtonsGroupButton
        checked={isSelected(props.value, Keyword.INIT)}
        onClick={createClickHandler(Keyword.INIT)}
        text={Keyword.INIT}
      />
      <ButtonsGroupButton
        checked={isSelected(props.value, Keyword.INH)}
        onClick={createClickHandler(Keyword.INH)}
        text={Keyword.INH}
      />
    </ButtonsGroup>
  );
}
