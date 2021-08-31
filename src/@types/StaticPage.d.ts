declare interface StaticPageProps {
  data: any;
  location: Location;
  navigate: Navigator;
  uri: string;
  pageContext: any;
  pageResources: {
    component: () => any;
    json: { pageContext: any };
    page: {
      componentChunkName: string;
      matchPath?: string;
      path: string;
      webpackCompilationHash: string;
    };
  };
}
