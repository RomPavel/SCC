export function formatCost({ cost, currency }) {
    return cost ? `${cost} ${currency}` : ''
}