import { Container } from 'inversify';
import { dependencies, dependenciesContainer } from './Dependencies';

export default class DependencyService {
    async loadDependencies(): Promise<Container> {
        dependenciesContainer.load(dependencies);
        return dependenciesContainer;
    }
}
