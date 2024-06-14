import { NetworkProvider } from '@ton/blueprint';
import { SwapRoot } from '../wrappers/SwapRoot';
import { swapRootAddress } from '../wrappers/constants';
import { Address, toNano } from '@ton/core';

export async function run(provider: NetworkProvider) {
    const sender = provider.sender();
    const address = sender.address;
    if (!address) return;

    const swapRoot = provider.open(SwapRoot.createFromAddress(swapRootAddress));

    await swapRoot.sendChangeAdmin(
        sender,
        toNano('0.01'),
        Address.parse('UQBZ6AL2EQiiVKUTzgo36FBC-YZryQ9_udo-SNzWkkw78t9A'),
    );
}
