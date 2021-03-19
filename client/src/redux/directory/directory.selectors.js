import { createSelector } from "reselect";

/* Select directory from state */
export const selectDirectory=(state)=>state.directory;


/* Select sections from directory */
export const selectDirectorySection=createSelector(
	selectDirectory,
	(directory)=>directory.sections
)