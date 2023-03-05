/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 23:26:46
 * @LastEditors: duxinyues yongyuan253015@gmail.com
 * @LastEditTime: 2023-03-05 23:29:56
 * @FilePath: \vite-react\src\routers\interface\index.ts
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	index?: boolean;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
