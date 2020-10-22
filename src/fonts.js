import styled from "@emotion/styled";
import React from "react";

import font from 'https://fonts.googleapis.com/css2?family=Nunito&amp;display=swap';

export default createGlobalFontStyle`
	@font-face {
		font-family: 'Nunito'
		src: local('Nunito'), local('Nunito');
		url(${font});
	}
`;