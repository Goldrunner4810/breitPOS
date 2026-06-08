    <script lang="ts">
        import type { PageProps } from './$types';
        let { data }: PageProps = $props();
        import type { Item } from '$lib/server/db/schema';

        let orderedItems: Item[] = $state([]);

    </script>

    <div class="user-profile">
        <p><strong>User ID:</strong> {data.user.id}</p>
        <p><strong>Email:</strong> {data.user.email}</p>
    </div>

    <hr />

    {#each data.categories as category}
        <section>
            <h2>{category.name}</h2>
            {#if category.items.length === 0}
                <p>No items in this category yet.</p>
            {:else}
                {#each category.items as item}
                        <strong>{item.name}</strong> —
                        ${(item.priceCents / 100).toFixed(2)}
                        <button onclick={ () => orderedItems.push(item) }>Add item</button>
                {/each}
            {/if}
        </section>
    {:else}
        <p>No categories found.</p>
    {/each}

    {#each orderedItems as item }
        <li>
            <strong>{item.name}</strong> —
            ${(item.priceCents / 100).toFixed(2)}
        </li>
    {/each}
