package online.nwen.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.*;

@Document(collection = "articles")
public class Article implements Serializable {
    private static final long serialVersionUID = 8070388670184979679L;
    @Id
    private String id;
    private String title;
    private Date publishDate;
    private Date updateDate;
    private Date createDate;
    private String content;
    private String summary;
    private String anthologyId;
    private String coverImageId;
    private Boolean isPublished;
    private Set<String> tags;
    private Map<String, Date> bookmarks;
    private Map<String, Date> praises;
    private Map<String, Date> viewers;

    public Article() {
        this.createDate = new Date();
        this.tags = new HashSet<>();
        this.bookmarks = new HashMap<>();
        this.praises = new HashMap<>();
        this.viewers = new HashMap<>();
        this.updateDate = this.createDate;
        this.isPublished = false;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getPublishDate() {
        return publishDate;
    }

    public void setPublishDate(Date publishDate) {
        this.publishDate = publishDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public Boolean getPublished() {
        return isPublished;
    }

    public void setPublished(Boolean published) {
        isPublished = published;
    }

    public String getAnthologyId() {
        return anthologyId;
    }

    public void setAnthologyId(String anthologyId) {
        this.anthologyId = anthologyId;
    }

    public String getCoverImageId() {
        return coverImageId;
    }

    public void setCoverImageId(String coverImageId) {
        this.coverImageId = coverImageId;
    }

    public Map<String, Date> getBookmarks() {
        return bookmarks;
    }

    public void setBookmarks(Map<String, Date> bookmarks) {
        this.bookmarks = bookmarks;
    }

    public Map<String, Date> getPraises() {
        return praises;
    }

    public void setPraises(Map<String, Date> praises) {
        this.praises = praises;
    }

    public Map<String, Date> getViewers() {
        return viewers;
    }

    public void setViewers(Map<String, Date> viewers) {
        this.viewers = viewers;
    }

    public Set<String> getTags() {
        return tags;
    }

    public void setTags(Set<String> tags) {
        this.tags = tags;
    }
}
