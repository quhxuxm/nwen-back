package online.nwen;

import online.nwen.entry.interceptor.SecurityContextInitializeInterceptor;
import online.nwen.entry.interceptor.SecurityVerifyInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.resource.VersionResourceResolver;

@Configuration
@EnableWebMvc
public class Web implements WebMvcConfigurer {
    private static final String ROOT_URL_PATTERN = "/**";
    private static final String ROOT_URL = "/";
    private static final String UI_URL = "/ui/";
    private static final String[] STATIC_RESOURCE_LOCATIONS = {"classpath:static/"};
    private static final String UI_INDEX_PAGE = "/ui/index.html";
    private SecurityVerifyInterceptor securityVerifyInterceptor;
    private SecurityContextInitializeInterceptor securityContextInitializeInterceptor;

    public Web(SecurityVerifyInterceptor securityVerifyInterceptor,
               SecurityContextInitializeInterceptor securityContextInitializeInterceptor) {
        this.securityVerifyInterceptor = securityVerifyInterceptor;
        this.securityContextInitializeInterceptor = securityContextInitializeInterceptor;
    }

    /**
     * Register the static resource.
     *
     * @param registry The static resource registry.
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(ROOT_URL_PATTERN)
                .addResourceLocations(STATIC_RESOURCE_LOCATIONS)
                .resourceChain(true)
                .addResolver(new VersionResourceResolver().addContentVersionStrategy(ROOT_URL_PATTERN));
    }

    /**
     * Redirect the ui request to the main html(index.html) of client side.
     * After redirect the angular engine will be loaded and running.
     *
     * @param registry The view registry
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //Redirect the root to index.html
        registry.addRedirectViewController(ROOT_URL, UI_INDEX_PAGE);
        //Redirect the "/ui/#/**" to index.html
        registry.addRedirectViewController(UI_URL,
                UI_INDEX_PAGE);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(this.securityVerifyInterceptor)
                .addPathPatterns("/api/security/**");
        registry.addInterceptor(this.securityContextInitializeInterceptor)
                .excludePathPatterns("/api/authenticate", "/api/register").addPathPatterns("/api/**");
    }
}
