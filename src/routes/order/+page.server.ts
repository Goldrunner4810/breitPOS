import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db/index';

export const load: PageServerLoad = async (event) => {
    const user = event.locals.user;
    if (!user) {
        throw redirect(302, '/auth');
    }
    
    const categoriesWithItems = await db.query.categories.findMany({
        with: {
            items: true,
        },
    });

    return {
        user,
        categories: categoriesWithItems
    };
};