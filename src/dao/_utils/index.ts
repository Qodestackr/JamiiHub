export function ETHToWei(ETHAmount: number): bigint {
    return BigInt(ETHAmount * 10 ** 18);
}


export * from './protocolVersion'
export * from './signatureValidator'