package online.nwen.service.dto.article;

import java.io.Serializable;

public class BookmarkArticleDTO implements Serializable {
    private String articleId;

    public String getArticleId() {
        return articleId;
    }

    public void setArticleId(String articleId) {
        this.articleId = articleId;
    }
}
