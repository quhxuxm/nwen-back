package online.nwen.service.dto.article;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class CreateArticleDTO implements Serializable {
    private String anthologyId;
    private String title;
    private String content;
    private String summary;
    private Set<String> tags;

    public CreateArticleDTO() {
        this.tags = new HashSet<>();
    }

    public String getAnthologyId() {
        return anthologyId;
    }

    public void setAnthologyId(String anthologyId) {
        this.anthologyId = anthologyId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Set<String> getTags() {
        return tags;
    }

    public void setTags(Set<String> tags) {
        this.tags = tags;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}
