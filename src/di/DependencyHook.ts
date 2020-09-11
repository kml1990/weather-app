import { useContext } from 'react';
import { interfaces } from 'inversify';
import { DependencyContext } from './DependencyContext';

export default function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
    const container = useContext(DependencyContext);
    if (container === null) {
        throw new Error(`The dependency container should be defined`);
    }
    return container.get<T>(identifier);
}
