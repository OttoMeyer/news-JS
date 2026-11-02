import { ArticleJSON, SourcesJSON } from '../../types/interfaces';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: ArticleJSON) => this.view.drawNews(data))
            );
        this.controller.getSources((data: SourcesJSON) => this.view.drawSources(data));
    }
}

export default App;
