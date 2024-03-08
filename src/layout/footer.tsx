import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component<any, any> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return (


            <div className="flex items-end w-full min-h-screen">
                <footer className="w-full text-white-700 bg-[#272932] body-font">
                    <div
                        className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                            <a href="#" className="flex items-center">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTUuNTIgMTE5LjcyMzI2NzQ1OTA4NjM3IiBoZWlnaHQ9IjExOS43MjMyNjc0NTkwODYzNyIgd2lkdGg9IjM5NS41MiI+PGc+PHN2ZyB2aWV3Qm94PSIwIDAgNjEyLjY0NTAzNjUxODM3NDEgMTg1LjQ0NjY2NjU3NzA5MTA0IiBoZWlnaHQ9IjExOS43MjMyNjc0NTkwODYzNyIgd2lkdGg9IjM5NS41MiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwyMTcuMTI1MDM2NTE4Mzc0MiwyNS42Mjk3NDkxNDM0MzI5OSkiPjxzdmcgdmlld0JveD0iMCAwIDM5NS41MiAxMzQuMTg3MTY4MjkwMjI1MDYiIGhlaWdodD0iMTM0LjE4NzE2ODI5MDIyNTA2IiB3aWR0aD0iMzk1LjUyIj48ZyBpZD0idGV4dGJsb2NrdHJhbnNmb3JtIj48c3ZnIHZpZXdCb3g9IjAgMCAzOTUuNTIgMTM0LjE4NzE2ODI5MDIyNTA2IiBoZWlnaHQ9IjEzNC4xODcxNjgyOTAyMjUwNiIgd2lkdGg9IjM5NS41MiIgaWQ9InRleHRibG9jayI+PGc+PHN2ZyB2aWV3Qm94PSIwIDAgMzk1LjUyIDEzNC4xODcxNjgyOTAyMjUwNiIgaGVpZ2h0PSIxMzQuMTg3MTY4MjkwMjI1MDYiIHdpZHRoPSIzOTUuNTIiPjxnIHRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLDEsMCwwKSI+PHN2ZyB3aWR0aD0iMzk1LjUyIiB2aWV3Qm94PSIzIC0zOS42NSAxNDguODQgNTAuNSIgaGVpZ2h0PSIxMzQuMTg3MTY4MjkwMjI1MDYiIGRhdGEtcGFsZXR0ZS1jb2xvcj0iIzBiYmE3YiI+PHBhdGggZD0iTTEwLjktMzQuNTVRMTcuMTUtMzQuNTUgMjAuNDMtMzEuNzggMjMuNy0yOSAyMy43LTIzLjZMMjMuNy0yMy42UTIzLjctMTcuODUgMjAuNDgtMTUgMTcuMjUtMTIuMTUgMTEuMzUtMTIuMTVMMTEuMzUtMTIuMTUgOS4zNS0xMi4xNSA5LjM1IDAgMyAwIDMtMzQuNTUgMTAuOS0zNC41NVpNMTEtMTYuOVExNC4yNS0xNi45IDE1LjctMTguNCAxNy4xNS0xOS45IDE3LjE1LTIzLjU1TDE3LjE1LTIzLjU1UTE3LjE1LTI2Ljg1IDE1LjctMjguMzUgMTQuMjUtMjkuODUgMTEuMDUtMjkuODVMMTEuMDUtMjkuODUgOS4zNS0yOS44NSA5LjM1LTE2LjkgMTEtMTYuOVpNMzguOTUtMjcuMVE0MC4xLTI3LjEgNDEtMjYuNzVMNDEtMjYuNzUgNDAtMjAuODVRMzktMjEuMSAzOC4xNS0yMS4xTDM4LjE1LTIxLjFRMzYuMjUtMjEuMSAzNS4xNS0xOS40NSAzNC4wNS0xNy44IDMzLjQ1LTE0LjU1TDMzLjQ1LTE0LjU1IDMzLjQ1IDAgMjcuMyAwIDI3LjMtMjYuNDUgMzIuNjUtMjYuNDUgMzMuMS0yMS44NVEzNC45NS0yNy4xIDM4Ljk1LTI3LjFMMzguOTUtMjcuMVpNNDMuODUtMjYuNDVMNTAtMjYuNDUgNTAgMCA0My44NSAwIDQzLjg1LTI2LjQ1Wk00Ni45LTM5LjY1UTQ4LjU1LTM5LjY1IDQ5LjU3LTM4LjYgNTAuNi0zNy41NSA1MC42LTM1LjlMNTAuNi0zNS45UTUwLjYtMzQuMyA0OS41Ny0zMy4yNSA0OC41NS0zMi4yIDQ2LjktMzIuMkw0Ni45LTMyLjJRNDUuMjUtMzIuMiA0NC4yMi0zMy4yNSA0My4yLTM0LjMgNDMuMi0zNS45TDQzLjItMzUuOVE0My4yLTM3LjU1IDQ0LjIyLTM4LjYgNDUuMjUtMzkuNjUgNDYuOS0zOS42NUw0Ni45LTM5LjY1Wk03OS4zNC0yNy4xNVE4MS45OS0yNy4xNSA4My41OS0yNS4xIDg1LjE5LTIzLjA1IDg1LjE5LTE5LjZMODUuMTktMTkuNiA4NS4xOSAwIDc5LjE0IDAgNzkuMTQtMTguOTVRNzkuMTQtMjAuODUgNzguNjQtMjEuNjggNzguMTQtMjIuNSA3Ny4xOS0yMi41TDc3LjE5LTIyLjVRNzUuMjQtMjIuNSA3My40NC0xOC44TDczLjQ0LTE4LjggNzMuNDQgMCA2Ny40NCAwIDY3LjQ0LTE4Ljk1UTY3LjQ0LTIyLjUgNjUuNTQtMjIuNUw2NS41NC0yMi41UTYzLjQ5LTIyLjUgNjEuNzQtMTguOEw2MS43NC0xOC44IDYxLjc0IDAgNTUuNjkgMCA1NS42OS0yNi40NSA2MS4wNC0yNi40NSA2MS40NC0yMy4wNVE2NC4wNC0yNy4xNSA2Ny42OS0yNy4xNUw2Ny42OS0yNy4xNVE2OS41NC0yNy4xNSA3MC44OS0yNiA3Mi4yNC0yNC44NSA3Mi45NC0yMi43NUw3Mi45NC0yMi43NVE3NS41OS0yNy4xNSA3OS4zNC0yNy4xNUw3OS4zNC0yNy4xNVpNMTA3LjU5LTYuNFExMDcuNTktNS4xIDEwNy45NC00LjQ4IDEwOC4yOS0zLjg1IDEwOS4wOS0zLjQ1TDEwOS4wOS0zLjQ1IDEwNy44NCAwLjY1UTEwNS43OSAwLjQgMTA0LjU2LTAuNDUgMTAzLjM0LTEuMyAxMDIuNzQtMy4wNUwxMDIuNzQtMy4wNVExMDAuNDQgMC43NSA5Ni4yOSAwLjc1TDk2LjI5IDAuNzVROTIuOTkgMC43NSA5MS4wNC0xLjQ4IDg5LjA5LTMuNyA4OS4wOS03LjRMODkuMDktNy40UTg5LjA5LTExLjcgOTEuNzctMTMuOTUgOTQuNDQtMTYuMiA5OS41NC0xNi4yTDk5LjU0LTE2LjIgMTAxLjU5LTE2LjIgMTAxLjU5LTE4LjA1UTEwMS41OS0yMC41NSAxMDAuNzItMjEuNTggOTkuODQtMjIuNiA5Ny44OS0yMi42TDk3Ljg5LTIyLjZROTUuNTQtMjIuNiA5Mi4wNC0yMS4zTDkyLjA0LTIxLjMgOTAuNjQtMjUuM1E5Mi42NC0yNi4yIDk0Ljc5LTI2LjY4IDk2Ljk0LTI3LjE1IDk4Ljg5LTI3LjE1TDk4Ljg5LTI3LjE1UTEwNy41OS0yNy4xNSAxMDcuNTktMTguMzVMMTA3LjU5LTE4LjM1IDEwNy41OS02LjRaTTk3Ljk0LTMuN1ExMDAuMzQtMy43IDEwMS41OS03TDEwMS41OS03IDEwMS41OS0xMi41NSAxMDAuMTQtMTIuNTVROTcuNTktMTIuNTUgOTYuNDItMTEuNCA5NS4yNC0xMC4yNSA5NS4yNC03Ljg1TDk1LjI0LTcuODVROTUuMjQtNS44IDk1Ljk0LTQuNzUgOTYuNjQtMy43IDk3Ljk0LTMuN0w5Ny45NC0zLjdaTTEyMi44OS0yNy4xNVExMjUuMDQtMjcuMTUgMTI2Ljc5LTI2LjQzIDEyOC41NC0yNS43IDEzMC4xNC0yNC4xNUwxMzAuMTQtMjQuMTUgMTI3LjQ5LTIwLjY1UTEyNi4zOS0yMS41NSAxMjUuNDEtMjEuOTggMTI0LjQ0LTIyLjQgMTIzLjI5LTIyLjRMMTIzLjI5LTIyLjRRMTIxLjA0LTIyLjQgMTE5Ljg5LTIwLjI4IDExOC43NC0xOC4xNSAxMTguNzQtMTMuMUwxMTguNzQtMTMuMVExMTguNzQtOC4yIDExOS45MS02LjIgMTIxLjA5LTQuMiAxMjMuMjktNC4yTDEyMy4yOS00LjJRMTI0LjM5LTQuMiAxMjUuMjktNC42IDEyNi4xOS01IDEyNy4zOS01Ljg1TDEyNy4zOS01Ljg1IDEzMC4xNC0yLjNRMTI2Ljk0IDAuNzUgMTIyLjk5IDAuNzVMMTIyLjk5IDAuNzVRMTE3Ljg5IDAuNzUgMTE1LjA2LTIuNzMgMTEyLjI0LTYuMiAxMTIuMjQtMTNMMTEyLjI0LTEzUTExMi4yNC0xNy40IDExMy41NC0yMC42IDExNC44NC0yMy44IDExNy4yNi0yNS40OCAxMTkuNjktMjcuMTUgMTIyLjg5LTI3LjE1TDEyMi44OS0yNy4xNVpNMTUxLjg0LTI2LjQ1TDE0NC44NCAwLjFRMTQzLjUzIDQuOSAxNDAuNjQgNy42NSAxMzcuNzQgMTAuNCAxMzIuODkgMTAuODVMMTMyLjg5IDEwLjg1IDEzMi4xOSA2LjVRMTM1LjM0IDUuODUgMTM2LjkxIDQuNDIgMTM4LjQ5IDMgMTM5LjM5IDBMMTM5LjM5IDAgMTM3LjA5IDAgMTMwLjM5LTI2LjQ1IDEzNi42NC0yNi40NSAxNDEuMDMtNC4xIDE0NS43NC0yNi40NSAxNTEuODQtMjYuNDVaIiBvcGFjaXR5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDAsMCkiIGZpbGw9IiNmZmZmZmYiIGNsYXNzPSJ3b3JkbWFyay10ZXh0LTAiIGRhdGEtZmlsbC1wYWxldHRlLWNvbG9yPSJwcmltYXJ5IiBpZD0idGV4dC0wIi8+PC9zdmc+PC9nPjwvc3ZnPjwvZz48L3N2Zz48L2c+PC9zdmc+PC9nPjxnPjxzdmcgdmlld0JveD0iMCAwIDE4NS40NDY2NjY1NzcwOTEwNCAxODUuNDQ2NjY2NTc3MDkxMDQiIGhlaWdodD0iMTg1LjQ0NjY2NjU3NzA5MTA0IiB3aWR0aD0iMTg1LjQ0NjY2NjU3NzA5MTA0Ij48Zz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDkwIDkwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA5MCA5MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaGVpZ2h0PSIxODUuNDQ2NjY2NTc3MDkxMDQiIHdpZHRoPSIxODUuNDQ2NjY2NTc3MDkxMDQiIGNsYXNzPSJpY29uLWljb24tMCIgZGF0YS1maWxsLXBhbGV0dGUtY29sb3I9ImFjY2VudCIgaWQ9Imljb24tMCIgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTg5LjIwOSAwLjc5MUM4OC43MDcgMC4yODggODguMDExIDAgODcuMyAwSDIuN0MxLjk4OCAwIDEuMjkzIDAuMjg4IDAuNzkgMC43OTEgMC4yODggMS4yOTMgMCAxLjk4OCAwIDIuN3Y4NC42YzAgMC43MTIgMC4yODggMS40MDcgMC43OTIgMS45MDhDMS4yOTMgODkuNzEyIDEuOTg4IDkwIDIuNyA5MGg4NC42YzAuNzExIDAgMS40MDctMC4yODggMS45MDktMC43OTJDODkuNzExIDg4LjcwNyA5MCA4OC4wMSA5MCA4Ny4zVjIuN0M5MCAxLjk5IDg5LjcxMSAxLjI5NSA4OS4yMDkgMC43OTF6TTg0LjYgNDUuMDJoLTkuOTI1YzIuMTE0IDIuMTIxIDMuNDI0IDUuMDQ4IDMuNDI0IDguMjc5IDAgNi40NzktNS4yNTEgMTEuNzI5LTExLjcyOSAxMS43MjlTNTQuNjQgNTkuNzc3IDU0LjY0IDUzLjI5OGMwLTMuMjMgMS4zMS02LjE1NyAzLjQyNy04LjI3OEg0NC45Nzl2LTAuMDAyaDAuMDQ1VjMxLjkzMWMyLjEyMSAyLjExNiA1LjA0NyAzLjQyNSA4LjI4IDMuNDI1IDYuNDc5IDAgMTEuNzI4LTUuMjUxIDExLjcyOC0xMS43MjkgMC02LjQ3OS01LjI0OS0xMS43My0xMS43MjgtMTEuNzMtMy4yMzIgMC02LjE1OSAxLjMxLTguMjggMy40MjRWNS4zOThoMzkuNTc0TDg0LjYgNDUuMDJ6TTUuMzk4IDQ0Ljk4Mmg5LjkyOGMtMi4xMTQtMi4xMjEtMy40MjQtNS4wNDgtMy40MjQtOC4yOCAwLTYuNDc5IDUuMjUxLTExLjcyOCAxMS43My0xMS43MjggNi40NzggMCAxMS43MjkgNS4yNSAxMS43MjkgMTEuNzI4IDAgMy4yMzItMS4zMDkgNi4xNTktMy40MjYgOC4yOGgxMy4wODd2MC4wMDJoLTAuMDQ1djEzLjA4N2MtMi4xMjEtMi4xMTYtNS4wNDgtMy40MjUtOC4yOC0zLjQyNS02LjQ3OSAwLTExLjcyOCA1LjI1MS0xMS43MjggMTEuNzI5IDAgNi40NzkgNS4yNDkgMTEuNzI5IDExLjcyOCAxMS43MjkgMy4yMzIgMCA2LjE1OS0xLjMxMSA4LjI4LTMuNDI1djkuOTJINS4zOThWNDQuOTgyeiIgZGF0YS1maWxsLXBhbGV0dGUtY29sb3I9ImFjY2VudCIvPjwvc3ZnPjwvZz48L3N2Zz48L2c+PC9zdmc+PC9nPjxkZWZzLz48L3N2Zz4=" className="mr-3 h-6 sm:h-9 w-[100px]" alt="primacy Logo" />
                            </a>

                        </div>
                        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">About the store</h2>
                                <nav className="mb-10 list-none">
                                    <li className="ml-3 mt-3">
                                        <a className="text-white cursor-pointer hover:text-white"><Link to="/">Home</Link></a>
                                    </li>
                                    <li className="ml-3 mt-3">
                                        <a className="text-white cursor-pointer hover:text-white"><Link to="/aboutus">About Us</Link></a>
                                    </li>
                                    <li className="ml-3 mt-3">
                                        <a className="text-white cursor-pointer hover:text-white"><Link to="/Home">What We Offer</Link></a>
                                    </li>
                                    <li className="ml-3 mt-3">
                                        <a className="text-white cursor-pointer hover:text-white"><Link to="/Home">Products</Link></a>
                                    </li>
                                    <li className="ml-3 mt-3">
                                        <a className="text-white cursor-pointer hover:text-white"><Link to="/Home">Career</Link></a>
                                    </li>
                                    <li className="ml-3 mt-3">
                                        <a className="text-white cursor-pointer hover:text-white"><Link to="/Home">Contact</Link></a>
                                    </li>
                                </nav>
                            </div>

                            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                <h2 className="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">Contact</h2>
                                <nav className="mb-10 list-none">
                    
                                    <li className="ml-3 mt-3">
                                    <a  className="flex text-white cursor-pointer hover:text-white transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 515 512">
                                            <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>   
                                            <span className='ml-2'>info@primacy.com</span>
                                        </a>
                                    </li>
                                    <li className="ml-3 mt-3">

                                        <a  className="flex text-white cursor-pointer hover:text-white transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> <span className='ml-2'>(+94)07 345 5678</span>
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                                <a className="text-white cursor-pointer hover:text-[#0bbA7B]">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-[#0bbA7B]">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                        </path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-[#0bbA7B]">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-white cursor-pointer hover:text-[#0bbA7B]">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                        </path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </footer>

            </div>

        );
    }

}

export default Footer