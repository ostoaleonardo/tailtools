export function GradientVisualizer({ code }: { code: string }) {
    return (
        <div className={`w-96 h-96 aspect-square ${code} rounded-3xl`} />
    )
}