import { render, screen, waitFor } from "@testing-library/react";
import {rest} from "msw";

import {setupServer} from "msw/node";
import home from "../component/Fetch/getSearchAPI"

const server = setupServer(
    rest.get('https://api.spotify.com/v1/search', (req,res,ctx) => {
        return res(ctx.status(201))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(()=> server.close());

test('should fetch search data', async () => {
    let status = 0
    const data = await home("tulus","BQAZ-9TuXXOhkfLxQo2gpLhTzj8Smf6XI_hnB9K_BKpoT0WM3OyQ-WLxKKMbgdNp1fQ7BlloZSP-GY4_kll1IWRdnTa02UKuXPkPw_5Aqax5Nx0HUU7BtfiHp8zEym_WbdNvO3oos2_FRZeodOV6YRj7dxXkU6GrbSaupNMRxxRKhW0dFw01-2q9y1b7NCM")
    .then(response => {
        status = response.status;
    })
    expect(status).toEqual(201);
    // await waitFor(()=> {
    //     return expect(screen.getAllByTestId('SongImage')).toHaveLength(5);
    // })
})