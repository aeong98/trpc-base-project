import * as trpc from '@trpc/server';
import {baseProcedure, router} from "../trpc";

export const appRouter = router({
    greeting: baseProcedure.query(()=>'hello tRPC!')
})

export type AppRouter = typeof appRouter;