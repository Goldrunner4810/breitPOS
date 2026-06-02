<script lang="ts">
    import type { PageProps } from './$types';
    let { data }: PageProps = $props();
</script>

<div class="user-profile">
    <p><strong>User ID:</strong> {data.user.id}</p>
    <p><strong>Email:</strong> {data.user.email}</p>
</div>

<hr />

{#each data.categories as category}
    <section class="category-group">
        <h2>{category.name}</h2>
        {#if category.items.length === 0}
            <p class="empty-state">No items in this category yet.</p>
        {:else}
            <ul>
                {#each category.items as item}
                    <li>
                        <strong>{item.name}</strong> — 
                        ${(item.priceCents / 100).toFixed(2)}
                    </li>
                {/each}
            </ul>
        {/if}
    </section>
{:else}
    <p>No categories found.</p>
{/each}

<style>
    .category-group {
        margin-bottom: 2rem;
    }
    .empty-state {
        color: #666;
        font-style: italic;
    }
</style>