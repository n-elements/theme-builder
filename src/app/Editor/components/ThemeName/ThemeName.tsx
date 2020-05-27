import React from "react";
import classes from "./ThemeName.module.css";
import { Edit } from "@components/Icons/12x";
import clsx from "clsx";
import { ApplicationState } from "@state";
import { useSelector, useDispatch } from "react-redux";
import actions from "@store/actions";

export interface IThemeNameProps extends PropsClass {}

function selector(state: ApplicationState) {
  return state.theming.name;
}

export const ThemeName = function ({
  className,
  ...attributes
}: IThemeNameProps) {
  const dispatch = useDispatch();
  const themeName = useSelector(selector);

  return (
    <div className={clsx(classes.ThemeName, className)} {...attributes}>
      <Edit className={classes.Icon} />
      <input
        className={classes.Input}
        onChange={(event) =>
          dispatch(actions.theming.updateName(event.target.value))
        }
        type="text"
        value={themeName}
      />
    </div>
  );
};

ThemeName.defaultProps = {
  value: "theme-name",
} as Partial<IThemeNameProps>;
